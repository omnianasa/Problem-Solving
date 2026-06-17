# emoji library
# The emoji library is used to work with emojis in Python.
# It provides functions to convert text to emojis, emojis to text, and to check if a string contains emojis.
# To use the emoji library, you first need to install it using pip:
# pip install emoji
# Github: https://github.com/carpedm20/emoji/
# The emoji library supports a wide range of emojis and allows you to easily include them in your Python applications.
# You can use it to add fun and expressive elements to your messages, user interfaces, or any other text-based content.

import emoji


# Convert text to emoji
print(emoji.emojize('Python is :thumbs_up:'))
print(emoji.emojize('Python is :thumbsup:', language='alias'))

# Convert emoji to text
print(emoji.demojize('Python is 👍'))

print(emoji.emojize("Python is fun :red_heart:", variant="emoji_type"))
print(emoji.emojize("Python is fun :white_heart:"))
print(emoji.emojize("Python is fun :black_heart:"))


# Check if a string contains emojis
def contains_emoji(s):
    return any(char in emoji.EMOJI_DATA for char in s)

string_with_emoji = "Hello 😊"
print(contains_emoji(string_with_emoji))

string_without_emoji = "Hello"
print(contains_emoji(string_without_emoji))

all_emojis = emoji.EMOJI_DATA.keys()
print(f"Total number of emojis: {len(all_emojis)}")

# You can also use the emoji library to get a list of all available emojis and their corresponding names.
for name, emoji_char in emoji.EMOJI_DATA.items():
    print(f"{name}: {emoji_char}")
