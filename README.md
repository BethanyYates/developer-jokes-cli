# Developer Jokes CLI

A command-line tool that fetches a list of developer jokes from an API and displays one at random.

## Installation

Run the following command to install the project dependencies:

```bash
npm install
```

## Usage

Run the following command to start the program:

```bash
npm start
```

Example output:

```text
Here's a developer joke for today:

Q: Why do programmers prefer dark mode?

A: Because light attracts bugs.
```

## How it works

Axios requests the jokes from the API. The program selects one joke at random from the returned data and displays its question and answer in the command line.

If the API request fails, the program displays the following error message:

```text
Could not fetch a joke. Try again later.
```