# Introduction to Computer Science - Fall 2017

## Lab 10 - It's not the heat, it's the humidity

**Functions as abstractions - Creating a Library:** This lab gives you a chance to practice defining and using functions and putting them in a lbrary. In this lab, you will write two functions. One will compute the dew point and another that computes the wind chill factor. In addition, you will create a library to put those functions in. The lab has been started for you and the files are included in this repository.

**Discussion:** A library is just a collection of JavaScript functions that are stored in their own file - a file that is separate from the html file. Rather than an html extension, a JavaScript library has a js extension. For this exercise, you will place your own functions in your copy of _weatherFunctions.js_. Note that for this lab, keep _weather.html_ and _weatherFunctions.js_ should be stored in the same directory.

The first step is for you to indicate in your html file where to find the library. You do this by including a second script element in the head element. Unlike in previous labs, you won't put any JavaScript in the script element. INstead, you just include a source (_src_) attribute that gives the name and the location of the library much like we need the source attribute to describe the name and location of an image file. Look at the [demo page](http://itech190.erickuha.com/) under _Abstraction_.

Add an appropriate script element to your copy of _weather.html_. The _src_ attribute should have the value of _weatherFunctions.js_. Don't forget the end tag for the script element. Again, look to the Demo page for inspiration.

The formula for computing the dew point given the temperature and humidity is rather straightforward. It is:

`dewpoint = temperature - (9(100 - humidity) / 25)`

The formulat for computing the wind chill is a bit more complex. Here is a simplified version that you can use:

<code>windchill = 35.74 + 0.6215 * temperature + (0.4275 * temperature - 35.75) * wind<sup>0.16</sup></code>

**The Dew Point Function:** Develop a JavaScript function named calculateDewPoint() that will calculate the dew point using the formula described above. The function must have two parameters: the temperature and the humidity. The function must return the dew point. All variables used in the function must be declared in the function using _var_ statements.

**The Wind Chill Function:** Develop a JavaScript function named calculateWindChill() that will calculate the wind chill using the formula described above. The function must have two parameters: the temperature and the wind speed. The function must return the wind chill. All variables used in the function must be declared in the function using _var_ statements.

Once you have completed the assignment, push it back to the repository for grading.
