import { defineDb, defineTable, column, NOW } from 'astro:db';

const Config = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    date: column.date({ default: NOW }),
  }
});

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({unique: true}),
    email: column.text({unique: true}),
    date: column.date({ default: NOW }),
  }
});

const Content = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    authorId: column.number({ references: () => Author.columns.id }),
    alias: column.text({unique: true}),
    title: column.text(),
    body: column.text(),
    published: column.boolean({ default: false }),
    metadata: column.json({ optional: true }),
    date: column.date({ default: NOW }),
  }
})

const HtmlTemplate = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({unique: true}),
    content: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Config, Author, Content, HtmlTemplate }
});
