---
title:  API demystified
date:   2021-04-27
author: Bao Huynh
imageURL: /assets/happy-people.jpg
tags: api web http
synopsis: |
  Learn about what an API is, why they exist, and how you can use them to make
  your own applications.
---

## What is an API

A = Application

P = Programming

I = Interface

API or Application Programming Interface is **a set of functions and
procedures** that enable applications to **access the features or data of
another** application, service, etc. an interface that allows different
applications to communicate with each other is how applications can communicate
and utilize functionalities of each other

**For example**: You do not control or understand the YouTube system, but can
still programmatically interact with YouTube features - writing codes that search,
update titles, get video statistics, etc. - through sets of functions provided by
the YouTube team - that is the YouTube API.

## Analogy: API is like a waiter

Imagine different applications are like different restaurants.

Then the API is like the waiter

To use services of a "restaurant", you don't go straight into the kitchen and cook
food yourselves.

Instead, you communicate through a "waiter" who first presents you with a "menu"
of available options - similar to real-life **API doc** that details available
functions or endpoints.

With the help of the menu, you choose an appropriate dish and supply required
components, then the waiter takes your info into the back "kitchen" for some
mysterious processing

Finally, the chef finishes cooking, and the waiter **returns** with your desired
"response"

## Anatomy of a web API

One popular type of API is web API, which takes the form of a list of "endpoints"
that you make HTTP requests to.

Four types of HTTP requests:

* GET request: Typically employed to get some information
* POST request: Typically employed to add some data to the system
* PUT request: Typically employed to update existing information
* DELETE request: Typically employed to delete information

As a result, POST and PUT endpoints often require additional data in the request's
body (e.g what content to add, who to update, etc.), and GET endpoints often
employ query strings to filter the result.

An HTTP request can also have a header that contains useful metadata: origin,
user-agent, authorization info, etc.

How to make a HTTP request

* Browser JavaScript: Native fetch API, Axios package, etc.
* Node.Js: Node-fetch package, Axios package, etc.
* PHP: cURL library, etc.
* Python: Requests library
* Command line: curl
* Extra tool: Postman, Hoppscotch.io

## Make your own API

* Python: Flask, Django, FastAPI, etc.
* NodeJs: Express, Nestjs, Feathers, etc.
* Java: Spring, etc.
* PHP: Laravel, etc.

## Final notes

* Making an API is not only useful to the outside world but can also help separate
concerns between the backend and frontend team: Backend creates API that processes
business logic, and Frontend just consumes the endpoints.
* Many APIs implement authentication to prevent unwanted access. Remember to check
if authorization is needed (keyword: Token, API key, etc.) when you use another's
API
* Remember to read API documentation carefully. Some bugs you encounter can be
squashed by using the correct options and syntax described in the API doc.
* Not all services have an API. In such cases, you might need other ways to access
the service's data, such as web scraping and crawling.
