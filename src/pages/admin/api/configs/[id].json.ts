import type { APIRoute } from "astro";
import { db, Config, eq, and } from 'astro:db';

export const prerender = false;

export async function getStaticPaths() {
  const configs = await db.select().from(Config);
  return configs.map(({ id }) => {
    return {
      params: { id },
    };
  });
}

export const GET: APIRoute = async (ctx) => {
  //console.log(ctx.params.id)
  let configs = {};
  if( ctx.params.id === undefined ){
    configs = await db.select().from(Config);
  }
  else{
    const id: number = ctx.params.id as unknown as number;
    configs = await db.select().from(Config).where(eq(Config.id, id));
  }
  //console.log('config',config)
  return new Response(JSON.stringify(configs));
}

export const PUT: APIRoute = async (ctx) => {
  //console.log(ctx.params.id)
  console.log('PUT',ctx)
  let configs = {};
  if( ctx.params.id === undefined ){
    configs = await db.select().from(Config);
  }
  else{
    if( ctx.request.body === undefined || ctx.request.body === null ) {
      throw new Error('No body')
    }
    else{
      const id: number = ctx.params.id as unknown as number;
      const body = await ctx.request.json();
      //console.log('body',body)
      //configs = await db.select().from(Config).where(and(eq(Config.published, true),eq(Config.id, id)));
      //console.log('body.data',body.data)
      configs = await db.update(Config).set({ name: body.name, email: body.email }).where(eq(Config.id, id));
    }
  }
  //console.log('config',config)
  return new Response(JSON.stringify(configs));
}


  /*
export const DELETE: APIRoute = async (ctx) => {
    
    //await db.delete(Config).where(eq(Config.id, ctx.params.id ));
    return new Response(null, { status: 204 });
  }



export const HEAD: APIRoute = async (ctx) => {
    //await db.select(Config).where(eq(Config.id, ctx.params.id ));
    return new Response(null, { status: 204 });
  }
  
export const PUT: APIRoute = async (ctx) => {
    
    const updatedConfigId: { updatedId: number }[] = await db.update(Config)
        .set(ctx.body)
        .where(eq(Config.id, ctx.params.id ))
        .returning({ updatedId: Config.id });
    return new Response(updatedConfigId, { status: 204 });
    
    return new Response(null, { status: 204 });
  }

  export const POST: APIRoute = async (ctx) => {
    
    const newConfigId: { newId: number }[] = await db.update(Config)
        .set(ctx.body)
        .returning({ newId: Config.id });
    return new Response(newConfigId, { status: 204 });
    
    return new Response(null, { status: 204 });

  }

  */
  