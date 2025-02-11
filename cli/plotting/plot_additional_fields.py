import streamlit as st
import plotly.express as px
import pandas as pd
from data_processing import resample_additional_data

def plot_additional_fields(df, interval, group_column, additional_columns, aggregation_method):
    """Generates and displays plots for additional fields in the dataframe."""
    try:
        for col in additional_columns:
            st.write(f"Plot for {col} grouped by {group_column}")
            st.write(f"This plot displays the evolution of {col} over time, grouped by {group_column}. The data is resampled at intervals of {interval} using the {aggregation_method} aggregation method.")
            fig = px.line(df, x='Timestamp', y=col, color=group_column, title=f'{col} over time grouped by {group_column}')
            fig.update_layout(width=1200, height=600, showlegend=False)
            st.plotly_chart(fig)
    except KeyError as e:
        st.error(f"Key error: {e}. Please make sure the columns are correctly selected.")
    except Exception as e:
        st.error(f"An error occurred while plotting: {e}")
