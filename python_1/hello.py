# Function to calculate the average rating from a list of ratings.
def calculate_average_rating(ratings_list):
    if len(ratings_list) == 0:  # Check for an empty list
        return 0
    total_ratings = sum(ratings_list)
    number_of_ratings = len(ratings_list)
    average_rating = total_ratings / number_of_ratings  # Calculate the average
    return average_rating


# Function to determine if the cat likes the flavor based on the average rating.
def does_cat_like_flavor(average_rating): 
    return average_rating >= 6  # The cat likes the flavor if average rating is 6 or more.


# Function to display a message based on whether the cat likes the flavor or not.
def display_message(likes_flavor):
    if likes_flavor:
        print("The cat loves the ice cream flavor!")
    else:
        print("The cat doesn't like the ice cream flavor...")


# Function to evaluate individual ratings and print messages based on the rating.
def evaluate_individual_ratings(ratings_list):
    for flavor_rating in ratings_list:
        if flavor_rating >= 7:  # If a rating is 7 or above, the cat likes it
            print(f"This flavor with a rating of {flavor_rating} is liked by the cat.")
        else:
            print(f"This flavor with a rating of {flavor_rating} is not liked by the cat.")


# Main function to evaluate the ice cream flavor.
def evaluate_ice_cream_flavor(ratings_list):
    average_rating = calculate_average_rating(ratings_list)  # Calculate the average rating
    
    cat_likes_flavor = does_cat_like_flavor(average_rating)  # Check if the cat likes the flavor based on average rating
    
    display_message(cat_likes_flavor)  # Display a message about whether the cat likes the flavor
    
    evaluate_individual_ratings(ratings_list)  # Evaluate each individual rating


# Sample list of ratings for an ice cream flavor.
ice_cream_ratings = [8, 7, 9, 5, 6]

# Call the function to evaluate the ice cream flavor based on the ratings.
evaluate_ice_cream_flavor(ice_cream_ratings)
