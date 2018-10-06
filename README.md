# Data Structures and Algorithms

## Installing

```shell
npm install
```

## Code Formatting

Recommended extensions for VSCode for formatting on save - these shouldn't require additional configuration -
[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

You can also format a file in place via the command line :

```shell
npm run format:fix <path>
```

## Linting

VSCode integration:
[TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

You can also fix certain lint errors automatically with:

```shell
npm run lint:fix <path>
```

## Testing

To run the entire test suite:

```shell
npm run test
```

To test a single file or group of files:

```shell
npm run test <path_or_glob_pattern>
```

## Git Hooks

Prior to every commit, all staged files will be automatically linted and formatted in place in order to enforce consistency. The linter check for all staged files, as well as all tests associated with the staged files must pass in order to commit.

If for some reason you absolutely need to bypass these checks (discouraged):

```shell
git commit -nm "message"
```
