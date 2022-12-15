## Summary
This document focuses on the introduction to NASA's APOD Application Programming Interface (API), request and response parameters.

## Introduction
The APIs allow two different software programs to interact with each other. 
Using these APIs, applications can exchange data in a reliable way.  
NASA offers some open APIs so that developers can use them for application development.

One such NASA API is APOD (Astronomy Picture of the day) is quite a popular website that features celestial objects of our universe. Each day a new picture from our universe is displayed. Today the image could be of a recently occurred lunar eclipse and tomorrow it could also be an image captured by the Mars rover. Some description along with other metadata is also provided with the image.

## How to get APOD API key?
The first step is the authentication, to access any API. The APIs are authenticated via Key. The key looks like a string of numbers and alphabets and is typically used to authenticate a project with the API rather than a user.

Follow the signup link https://api.nasa.gov/#signUp to access the APOD API key.

## How to send the request?
APOD utilises an HTTP GET request method to access data from the NASA server. 
This API uses only one URL (endpoint) to fetch the data from the NASA server. 
> https://api.nasa.gov/planetary/apod

But along with the URL, you need to provide some parameters to get the desired result. These additional parameters are called Query String which is in (Key/Value) pair. Let us look at an example for a better understanding.
 
<html>
<body>
<!--StartFragment-->

Parameter | Format| Default Value | Description | Required 
-- | -- | -- | -- | --
api_key | string | DEMO_KEY | api.nasa.gov key authentication | true
date | YYYY-MM-DD | today | The date of the APOD image to retrieve | false

<!--EndFragment-->
</body>
</html>

The syntax for Query String
> https://api.nasa.gov/planetary/apod?api_key=jMiG6sShfCYbv85ggYgVrY8pGJDSffclcz1kxKkP&date=2001-09-30

## APOD request Parameters

<html>
<body>
<!--StartFragment-->

Parameter | Format| Default Value | Description | Required | Minimum | Maximum
-- | -- | -- | -- | -- | -- | --
api_key| string | DEMO_KEY | api.nasa.gov key authentication | true | NA | NA
date | YYYY-MM-DD | today | The date of the APOD image to retrieve | false | 1995-06-16 | date
concept_tags | boolean | false | The concept tags are not necessarily part of the explanation, but are fetched from common search tags that are associated with the description text. | false | NA | NA
hd | boolean | false | Depicts whether or not high-resolution images should be returned. High-resolution URLs are returned as default. | false | NA
count| integer | false |  If this parameter is specified then count randomly choses the images to be returned in a JSON array. This parameter is not be used with date or start_date and end_date | false | 0 | 99 | NA | NA
start_date | YYYY-MM-DD| NA | Images that falls within the start_date to end_date would be displayed. Not to be used with date | false | 1995-06-16 | date
end_date | YYYY-MM-DD | date | If start_date is specified without an end_date then end_date defaults to the current date. | false | NA | NA
thumbs | boolean | false | Depicts whether the API should return a thumbnail image URL for video files | false | NA | NA

NA : Not Applicable
<!--EndFragment-->
</body>
</html>

## How is the request returned? 
The endpoint request returns information in JavaScript Object Notation (JSON). JSON is a format to store and exchange the data between a web application and a server (NASA database). The JSON is always in (name/value)pair, separated by commas. The response to our request is displayed here: 

> `{"date":"2001-09-30","explanation":"What is creating the strange texture of IC 418?  Dubbed the Spirograph Nebula for its resemblance to drawings from a cyclical drawing tool, planetary nebula IC 418 shows patterns that are not well understood.  Perhaps they are related to chaotic winds from the variable central star, which changes brightness unpredictably in just a few hours.  By contrast, evidence indicates that only a few million years ago, IC 418 was probably a well-understood star similar to our Sun.  Only a few thousand years ago, IC 418 was probably a common red giant star.  Since running out of nuclear fuel, though, the outer envelope has begun expanding outward leaving a hot remnant core destined to become a white-dwarf star, visible in the image center.  The light from the central core excites surrounding atoms in the nebula causing them to glow.  IC 418 lies about 2000 light-years away and spans 0.3 light-years across.  This recently released false-color image taken from the Hubble Space Telescope reveals the unusual details.","hdurl":"https://apod.nasa.gov/apod/image/0009/spirograph_heritage_big.jpg","media_type":"image","service_version":"v1","title":"IC 418: The Spirograph Nebula","url":"https://apod.nasa.gov/apod/image/0009/spirograph_heritage.jpg"}`

## APOD response fields


<html>
<body>
<!--StartFragment-->

Parameter | Description | 
-- | -- 
date | Date on which image was displayed
explanation| Text describing the related image
hdurl | URL for any high-resolution image for that day
media_type | The format in which media is returned.Two formats could be "image" or "video". 
service_version | The service version used
title | The title of the image
url | The URL of the APOD image or video of the day.

<!--EndFragment-->
</body>
</html>

<html>
<body>
<!--StartFragment-->

Response | Message | 
-- | --
200| Success
400 | Error Date parameter must be between Jun 16, 1995 and today's date.
403| API key is missing

<!--EndFragment-->
</body>
</html>







 


