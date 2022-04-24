module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env(
          'DATABASE_HOST',
          'cluster0-shard-00-00.ozoit.mongodb.net:27017/myFirstDatabase?ssl=true&authSource=admin&retryWrites=true&w=majority&&slaveOk=true&replicaSet=readPreference=secondaryPreferred',
        ),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'landingpages-Strapi-Mongo-React'),
        username: env('DATABASE_USERNAME', 'pcardoso'),
        password: env('DATABASE_PASSWORD', 'CspkL4y9o7hIxxuZ'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
