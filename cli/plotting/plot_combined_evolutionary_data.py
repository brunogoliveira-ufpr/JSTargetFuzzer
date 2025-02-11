import streamlit as st
import plotly.express as px
import pandas as pd

def plot_combined_evolutionary_data(df, y_column, group_column):
    """Generates and displays combined evolutionary plots for all groups in a single plot."""
    try:
        st.write(f"Combined Evolutionary Plot for {y_column} grouped by {group_column}")
        fig = px.line(df, x='Timestamp', y=y_column, color=group_column, title=f'{y_column} over time grouped by {group_column}')
        fig.update_layout(width=1200, height=600)
        st.plotly_chart(fig)
    except KeyError as e:
        st.error(f"Key error: {e}. Please make sure the columns are correctly selected.")
    except Exception as e:
        st.error(f"An error occurred while plotting: {e}")
