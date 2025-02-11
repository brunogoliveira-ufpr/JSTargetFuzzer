import pandas as pd

def count_group_occurrences(df, interval, group_column):
    """Counts the occurrences of each group in the dataframe based on the provided time interval."""
    df.set_index('Timestamp', inplace=True)
    group_counts = df.groupby(group_column).resample(interval).size().reset_index(name='Count')
    return group_counts
