const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: db,
	pool: {
		min: 1,
		max: 20
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
