module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ced2ofun6mpgskip7vc0-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_6edk'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'PYBu5pJBl9OMSBLjbut0btELjU7nHugg'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
