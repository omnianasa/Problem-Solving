## The library pyjokes is used to get random jokes in Python.
#  It provides a collection of jokes in various categories and languages. 
# You can use it to fetch jokes for entertainment or to lighten the mood in your applications.

# To use the pyjokes library, you first need to install it using pip:
# pip install pyjokes
# Documentation: https://pyjok.es/ 
# Github: https://github.com/pyjokes/pyjokes

import pyjokes

# Get a random joke in English
joke = pyjokes.get_joke()
print(joke)

# Get a random joke in Spanish
joke_spanish = pyjokes.get_joke(language='es')
print(joke_spanish)

# Get a random joke in the 'neutral' category
joke_neutral = pyjokes.get_joke(category='neutral')
print(joke_neutral)

# Get a random joke in the 'chuck' category
joke_chuck = pyjokes.get_joke(category='chuck')
print(joke_chuck)

# You can also specify both language and category
joke_spanish_chuck = pyjokes.get_joke(language='es', category='chuck')
print(joke_spanish_chuck)

# The pyjokes library supports multiple languages and categories, so you can explore different jokes based on your preferences.
# The box said: 'install on Windows 95, NT 4.0 or better'. So I installed it on Linux.
# Writing PHP is like peeing in the swimming pool, everyone did it, but we don't need to bring it up in public.
# Chuck Norris does not need to know about Class Factory Pattern. He can instantiate interfaces.
# ¿Qué le dice un GIF a un JPG? Anímate hombre...


