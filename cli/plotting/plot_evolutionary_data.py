import streamlit as st
import plotly.express as px
import pandas as pd

def plot_evolutionary_data(df, y_column, group_column):
    """Generates and displays evolutionary plots for the specified column grouped by another column."""
    try:
        unique_groups = df[group_column].unique()
        for group in unique_groups:
            group_df = df[df[group_column] == group]
            st.write(f"Evolutionary Plot for {y_column} with {group_column} = {group}")
            st.write(f"This plot shows how the {y_column} evolves over time for the group where {group_column} = {group}.")
            fig = px.line(group_df, x='Timestamp', y=y_column, title=f'{y_column} over time for {group_column} = {group}')
            fig.update_layout(width=1200, height=600, showlegend=False)
            st.plotly_chart(fig)
    except KeyError as e:
        st.error(f"Key error: {e}. Please make sure the columns are correctly selected.")
    except Exception as e:
        st.error(f"An error occurred while plotting: {e}")
