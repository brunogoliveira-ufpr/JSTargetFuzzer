import streamlit as st
from data_processing import resample_data, count_group_occurrences
from plotting import plot_evolutionary_data, plot_group_counts, plot_combined_evolutionary_data

def run_evolutionary_analysis(df):
    resample_interval = st.sidebar.selectbox("Select time interval for evolutionary analysis", ["15min", "1H", "1D"])
    all_columns = df.columns.tolist()
    y_column = st.sidebar.selectbox("Select column for evolutionary analysis", all_columns)
    group_column = st.sidebar.selectbox("Select grouping column", all_columns)
    aggregation_method = st.sidebar.selectbox("Select aggregation method", ["mean", "max", "last"])

    if 'Timestamp' in df.columns and y_column and group_column:
        try:
            # Resample and plot evolutionary data
            resampled_data = resample_data(df.copy(), resample_interval, y_column, group_column, aggregation_method)
            
            # Use container to expand the plot area
            with st.container():
                plot_evolutionary_data(resampled_data, y_column, group_column)
            
            with st.container():
                # Count and plot group occurrences
                group_counts = count_group_occurrences(df.copy(), resample_interval, group_column)
                plot_group_counts(group_counts, group_column)
            
            with st.container():
                # Plot combined evolutionary data for all groups
                plot_combined_evolutionary_data(resampled_data, y_column, group_column)
            
        except Exception as e:
            st.error(f"An error occurred: {e}")
            st.stop()
