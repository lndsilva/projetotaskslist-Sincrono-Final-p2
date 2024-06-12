
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.datetime('estimate_At')
        table.datetime('done_At')
        table.integer('user_Id').references('id')
            .inTable('users').notNull()
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
  
};
