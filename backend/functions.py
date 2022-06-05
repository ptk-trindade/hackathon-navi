# # import geopy.distance

# def get_distance(df, user_lat, user_lon):
#     # VERIFY
#     if ("longitude" not in df) or ("latitude" not in df):
#             print("ERROR - get_distance - Missing column longitude/latitude in dataframe")
#             return df

#     # RUN
#     distances = []
#     for c in range(len(df["longitude"])):

#         prod_long = float(df["longitude"][c])
#         prod_lat = float(df["latitude"][c])
        
#         distance = geopy.distance.geodesic((prod_long, prod_lat), (user_lat, user_lon)).km
#         distances.append(distance)

#     df["disitance"] = distances

#     return df