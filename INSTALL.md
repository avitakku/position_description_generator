# Installation Guide for Position Description Generator

This document provides step-by-step instructions for setting up and running the Position Description Generator on your local machine.

## Set up:

### Step 1: Install Python
If you don't have Python installed, download it from the [Python website](https://www.python.org/downloads/).

### Step 2: Get OpenAI API Key
Retrieve your OpenAI API key from the [OpenAI website](https://openai.com/blog/openai-api).

### Step 3: Set Variables and API Key Safety
For the `app.secret_key`, pick any long string that is hard to guess.

For API key safety, follow these [steps](https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety), OR

Create a `config.py` file with the following code:
```python
api_key = INSERT_YOUR_ACTUAL_API_KEY_HERE
secret_key = INSERT_YOUR_ACTUAL_SECRET_KEY_HERE
```

## Running the code:
**Step 1:**
Download all requirements from the requirements.txt file

**Step 2:**
To run the code locally, run the following command in your Command Line Interface (ensure you are in the directory where all the files are present):
```python
  python server.py
```

**Step 3:**
Open the link that shows up in your browser!
