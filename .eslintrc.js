module.exports = {
    overrides: [
        {
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            parserOptions: {
                sourceType: "module",
                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
            files: ["*.ts"],
            rules: {
                "@typescript-eslint/no-misused-promises": [
                    "error",
                    {
                        checksConditionals: false,
                        checksSpreads: false,
                        checksVoidReturn: {
                            // This is the only one needed to cause the issue
                            arguments: true,
                            attributes: false,
                            properties: false,
                            returns: false,
                            variables: false,
                        },
                    },
                ],
            },
        },
    ],
};
