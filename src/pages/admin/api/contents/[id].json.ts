import type { APIRoute } from "astro";
import { db, Content, eq, and } from 'astro:db';

export const prerender = false;

export async function getStaticPaths() {
  const contents = await db.select().from(Content).where(eq(Content.published, true));
  return contents.map(({ id }) => {
    return {
      params: { id },
    };
  });
}

export const GET: APIRoute = async (ctx) => {
  //console.log(ctx.params.id)
  let contents = {};
  const request = await ctx.request.json();
  if( ctx.params.id === undefined ){
    if( request.data.alias && request.data.alias != '' ){
      contents = await db.select().from(Content).where(eq(Content.alias, request.data.alias));
    }
    else{
      contents = await db.select().from(Content).where(eq(Content.published, true));
    }
  }
  else{
    const id: number = ctx.params.id as unknown as number;
    contents = await db.select().from(Content).where(and(eq(Content.published, true),eq(Content.id, id)));
  }
  //console.log('content',content)
  return new Response(JSON.stringify(contents));
}

/* update content */
export const PUT: APIRoute = async (ctx) => {
  //console.log(ctx.params.id)
  //console.log('PUT',ctx)
  let contents = {};
  if( ctx.params.id === undefined ){
    contents = await db.select().from(Content).where(eq(Content.published, true));
  }
  else{

    if( ctx.request.body === undefined || ctx.request.body === null ) {
      throw new Error('No body')
    }
    else{
      const id: number = ctx.params.id as unknown as number;
      const request = await ctx.request.json();
      //console.log('body',body)
      //contents = await db.select().from(Content).where(and(eq(Content.published, true),eq(Content.id, id)));
      //console.log('request.data',request.data)
      contents = await db.update(Content).set({ 
        alias: request.data.alias,
        title: request.data.title,
        body: request.data.body,
        published: request.data.published,
       }).where(eq(Content.id, id));
    }
  }
  //console.log('content',content)
  return new Response(JSON.stringify(contents));
}


/* delete content */
export const DELETE: APIRoute = async (ctx) => {
  let contents = {};
    if( ctx.params.id === undefined ){
      contents = await db.select().from(Content).where(eq(Content.published, true));
      return new Response(JSON.stringify(contents));
    }
    else{
      const id: number = ctx.params.id as unknown as number;
      await db.delete(Content).where(eq(Content.id, id));
      return new Response(null, { status: 204 });
    }
  }


/* add content (insert) */
export const POST: APIRoute = async (ctx) => {
  //console.log(ctx.params.id)
  //console.log('PUT',ctx)
  let contents = {};
  if( ctx.params.id === 'add' ){
    if( ctx.request.body === undefined || ctx.request.body === null ) {
      throw new Error('No body')
    }
    else{
      const request = await ctx.request.json();
      //console.log('body',body)
      //contents = await db.select().from(Content).where(and(eq(Content.published, true),eq(Content.id, id)));
      //console.log('request.data',request.data)
      /*
      contents = await db.insert(Content).values({ 
        alias: request.data.alias,
        title: request.data.title,
        body: request.data.body,
        published: request.data.published,
       });
       */
       type NewContent = typeof Content.$inferInsert;

       const insertContent = async (content: NewContent) => {
        //console.log(db.insert(Content).values(content).returning())
         return db.insert(Content).values(content).returning();
       }
       
       const newContent: NewContent = { 
        authorId: request.data.authorId,
        alias: request.data.alias,
        title: request.data.title,
        body: request.data.body,
        published: request.data.published,
       };
      contents = await insertContent(newContent).then((content)=>{
        //console.log('content[0]: ',content[0])
        return content[0];
      });
       
    }
  }
  else{
    if( ctx.params.id === 'test' ){
      const request = await ctx.request.json();
      contents = await db.select().from(Content).where(eq(Content.alias, request.data.alias));
    }
    else{
      contents = await db.select().from(Content).where(eq(Content.published, true));
    }
    return new Response(JSON.stringify(contents));
  }
  //console.log('content',content)
  return new Response(JSON.stringify(contents));
}
