## About

This project is a web-based chatbot that uses the `gpt-3.5-turbo` model to generate natural language responses to user inputs. The functionality of this chatbot is similar to that of ChatGPT, but with a custom user interface based on [Umamin](https://umamin.link). This project is created for learning purposes to explore the capabilities of advanced language models.

## Preview

<img src='https://user-images.githubusercontent.com/69457996/229979641-02b3fff4-546a-4599-91c0-0aec31e7f370.gif' width='600'>

## Getting Started

Clone this repository and navigate to the project directory:

```sh
$ git clone --depth=1 https://github.com/joshxfi/chatbot-umamin.git
$ cd chatbot-umamin
```

To use this repository, you'll need to obtain an OpenAI API key, which you can get [here](https://platform.openai.com/account/api-keys). Once you have your API key, create a `.env` file in the root directory of the repository and add the following line:

```env
OPENAI_API_KEY=your_api_key
```

To install the dependencies and start the chatbot, run the following commands in a terminal:

```sh
$ pnpm i
$ cd client && pnpm i
$ cd ..
$ pnpm start
```

This will start a GraphQL server on `http://locahost:4000`. You can access the chatbot at `http://localhost:5173`.

## Contributing

If you find a bug or want to suggest a new feature, feel free to create an issue or submit a pull request.

## Customization

If you want to customize the UI, you can modify the source code in the `client` directory.

If you want to change the model of the chatbot or add new functionality, you can modify the code in the `schema` directory. See [API Reference](https://platform.openai.com/docs/api-reference/introduction) for the different models you can use.

## Tech Stack

This project is built using the following technologies:
- React (Vite)
- TypeScript
- Tailwind CSS
- Apollo
- GraphQL (TypeGraphQL)

## License

This repository is licensed under the MIT License. See the [LICENSE](https://github.com/joshxfi/chat-umamin/blob/main/LICENSE) file for more information.
