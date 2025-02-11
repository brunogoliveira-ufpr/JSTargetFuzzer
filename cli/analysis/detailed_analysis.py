import streamlit as st
from data_processing.resample_data import resample_data
from data_processing.compare_data import compare_data
from plotting.plot_evolutionary_data import plot_evolutionary_data
from plotting.plot_additional_fields import plot_additional_fields
from plotting.plot_combined_evolutionary_data import plot_combined_evolutionary_data
from .detailed_statistical_analysis import display_detailed_statistical_analysis

def run_detailed_analysis(df_list, file_names):
    resample_interval = st.sidebar.selectbox("Select time interval for detailed analysis", ["15min", "1H", "1D"])
    all_columns = df_list[0].columns.tolist()
    y_column = st.sidebar.selectbox("Select main column for detailed analysis", all_columns)
    group_column = st.sidebar.selectbox("Select grouping column for detailed analysis", all_columns)
    additional_columns = st.sidebar.multiselect("Select additional columns for detailed analysis", all_columns)
    
    aggregation_method_main = st.sidebar.selectbox("Select aggregation method for main column", ["mean", "max", "last", "count", "min", "std", "sum"])
    aggregation_methods_additional = {
        col: st.sidebar.selectbox(f"Select aggregation method for {col}", ["mean", "max", "last", "count", "min", "std", "sum"]) for col in additional_columns
    }

    if 'Timestamp' in df_list[0].columns and y_column and group_column:
        try:
            # Resample main data and additional columns for each dataframe
            columns_to_resample = [y_column] + additional_columns
            aggregation_methods = {y_column: aggregation_method_main, **aggregation_methods_additional}
            
            resampled_data_list = compare_data(df_list, resample_interval, columns_to_resample, group_column, aggregation_methods)

            # Display combined statistical analysis for each dataframe
            for i, resampled_data in enumerate(resampled_data_list):
                st.write(f"Analysis of file: {file_names[i]}")
                display_detailed_statistical_analysis(resampled_data, y_column, group_column, additional_columns)
                
                # Use container to expand the plot area for the main column
                with st.container():
                    st.write(f"Evolutionary Plot of {y_column} grouped by {group_column} for file {file_names[i]}")
                    st.write(f"This plot shows how {y_column} evolves over time, grouped by {group_column}. The data is sampled in intervals of {resample_interval} using the {aggregation_method_main} aggregation method.")
                    plot_evolutionary_data(resampled_data, y_column, group_column)
                
                # Plot additional fields
                for col in additional_columns:
                    with st.container():
                        st.write(f"Plot of {col} grouped by {group_column} for file {file_names[i]}")
                        st.write(f"This plot shows the evolution of {col} over time, grouped by {group_column}. The data is sampled in intervals of {resample_interval} using the {aggregation_methods_additional[col]} aggregation method.")
                        plot_additional_fields(resampled_data, resample_interval, group_column, [col], aggregation_methods_additional[col])
            
            # Comparing data across dataframes
            # st.write(f"Comparison of data between files: {', '.join(file_names)}")
            # comparison_df = resampled_data_list[0][['Timestamp', group_column, y_column]].copy()
            # comparison_df.columns = ['Timestamp', group_column, f'{file_names[0]}_{y_column}']
            
            # for i, resampled_data in enumerate(resampled_data_list[1:], start=1):
            #     comparison_df = comparison_df.merge(resampled_data[['Timestamp', group_column, y_column]], on=['Timestamp', group_column], how='outer', suffixes=('', f'_{file_names[i]}'))
            #     for col in additional_columns:
            #         comparison_df = comparison_df.merge(resampled_data[['Timestamp', group_column, col]], on=['Timestamp', group_column], how='outer', suffixes=('', f'_{file_names[i]}'))

            # st.write(comparison_df)
        
        except Exception as e:
            st.error(f"An error occurred: {e}")
            st.stop()
