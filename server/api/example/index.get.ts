export default defineEventHandler((event) => {

    const config = useRuntimeConfig(event);

    const data = {
        exampleToken: config.exampleToken,
        exampleUser: config.exampleUser,
        exampleRepo: config.exampleRepo,
    }

    return data
});