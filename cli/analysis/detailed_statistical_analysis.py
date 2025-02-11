import streamlit as st
import pandas as pd

def display_detailed_statistical_analysis(resampled_data, y_column, group_column, additional_columns):
    columns_to_analyze = [y_column] + additional_columns

    st.write("Combined Statistical Analysis")
    st.write(f"Statistical analysis of selected columns grouped by {group_column} and resampled by time interval")

    for group in resampled_data[group_column].unique():
        st.write(f"Group: {group}")
        group_data = resampled_data[resampled_data[group_column] == group]
        st.write(group_data[columns_to_analyze + ['Timestamp']])
