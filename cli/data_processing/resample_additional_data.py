import pandas as pd

def resample_additional_data(df, interval, group_column, additional_columns, aggregation_method):
    """Resamples additional data columns based on the provided time interval and aggregation method."""
    df.set_index('Timestamp', inplace=True)
    if aggregation_method == "mean":
        resampled = df.groupby(group_column).resample(interval).mean()
    elif aggregation_method == "max":
        resampled = df.groupby(group_column).resample(interval).max()
    elif aggregation_method == "last":
        resampled = df.groupby(group_column).resample(interval).last()
    else:
        raise ValueError("Invalid aggregation method")
    resampled = resampled.drop(columns=[group_column]).reset_index()
    return resampled[['Timestamp', group_column] + additional_columns]
