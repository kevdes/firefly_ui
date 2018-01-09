module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Firefly',
    titleTemplate: 'Firefly - %s',
    meta: [
      {
        name: 'description',
        content: 'Iloura Global Test App'
      }
    ]
  }
};
