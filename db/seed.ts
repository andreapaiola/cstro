import { db, Config, Author, Content, HtmlTemplate } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Author).values([
		{
			id: 1,
			name: 'Andrea Paiola',
			email: 'andrea.paiola@site.com',
		},
		{
			id: 2,
			name: 'Author2',
			email: 'aut2@site.com',
		},
	])

	await db.insert(Content).values([
		{
			id: 1,
			authorId: 1,
			alias: '/',
			title: 'Homepage title',
			body: `<h1>Homepage body</h1><h2>
			HTML playground
		</h2>
		<div class="wrapper">
  <div class="with-sidebar" style="--main-min-width: 40ch;--sidebar-size: 30ch;">
    <main>
      <h1>First title</h1>
      <h2>Second title</h2>
      <p class="red">A short text.</p>
    
      <table>
    <caption>Table 1</caption>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Example 1</td>
            <td>nlkjfnekljnkjrkjnenjbn</td>
            <td>Example</td>
            <td>Example</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Example</td>
            <td></td>
        </tr>
    </tbody>
</table>
      <p class="red">A short text.</p>
      <p>Sunt suscipit <b>exercitationem</b> qui earum <em>exercitationem</em> <i>dolor</i>. Mollitia provident hic vel aut.</p>
      <p>Autem <a href=""#test">et dolore nostrum</a> cumque quis sit quos voluptatibus. Quis excepturi nulla dolore. Sapiente neque qui ut atque ab sequi aperiam cum. Qui quasi quisquam porro molestiae dolorum perspiciatis sunt necessitatibus harum. Aut tempore perspiciatis non aspernatur quis error reprehenderit velit distinctio. Rerum nihil modi iusto ad aut.
          <br>At sequi voluptas qui. Porro quia iusto omnis quo. Et culpa similique aut amet non accusamus.
          <br><br>Velit et quo. Quod mollitia rerum enim autem qui omnis sunt quis. Ut eum in exercitationem non ut. Natus nemo laborum rerum voluptas inventore. Architecto atque excepturi est sapiente corporis alias consequatur et perspiciatis. Ut culpa vel.
      </p>
      <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
       </ol>
  
       <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>
  
       <h3>Header Level 3</h3>
  
       <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
       </ul>
    </main>
    <aside>
        <h2>Sidebar</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Iure veritatis accusantium eum quibusdam.</p>
        <p>Dolorum amet nisi harum vitae!</p>
      </aside>
  </div>
  
  <div class="columns">
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
    </div>
    <div>
      <h2>Optio, sit excepturi.</h2>
      <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores.</p>
    </div>
    <div>
      <h2>Alias, quae? Tempora!</h2>
      <p>Nisi velit laborum, sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore!</p>
    </div>
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
    </div>
    <div>
      <h2>Optio, sit excepturi.</h2>
      <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores.</p>
    </div>
    <div>
      <h2>Alias, quae? Tempora!</h2>
      <p>Nisi velit laborum, sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore!</p>
    </div>
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
    </div>
    <div>
      <h2>Optio, sit excepturi.</h2>
      <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores.</p>
    </div>
    <div>
      <h2>Alias, quae? Tempora!</h2>
      <p>Nisi velit laborum, sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore!</p>
    </div>
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
    </div>
    <div>
      <h2>Optio, sit excepturi.</h2>
      <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores.</p>
    </div>
    <div>
      <h2>Alias, quae? Tempora!</h2>
      <p>Nisi velit laborum, sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore!</p>
    </div>
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
    </div>
    <div>
      <h2>Optio, sit excepturi.</h2>
      <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores.</p>
    </div>
    <div>
      <h2>Alias, quae? Tempora!</h2>
      <p>Nisi velit laborum, sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore!</p>
    </div>
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
    </div>
    <div>
      <h2>Optio, sit excepturi.</h2>
      <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores.</p>
    </div>
    <div>
      <h2>Alias, quae? Tempora!</h2>
      <p>Nisi velit laborum, sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore!</p>
    </div>
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
    </div>
    <div>
      <h2>Optio, sit excepturi.</h2>
      <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores.</p>
    </div>

  </div>

    <h1>First title</h1>
    <h2>Second title</h2>
    <img src="https://unsplash.it/1600/400" alt="">
    <p>A short text.</p>
    <p>Sunt suscipit <b>exercitationem</b> qui earum <em>exercitationem</em> <i>dolor</i>. Mollitia provident hic vel aut.</p>
    <p>Autem et dolore nostrum cumque quis sit quos voluptatibus. Quis excepturi nulla dolore. Sapiente neque qui ut atque ab sequi aperiam cum. Qui quasi quisquam porro molestiae dolorum perspiciatis sunt necessitatibus harum. Aut tempore perspiciatis non aspernatur quis error reprehenderit velit distinctio. Rerum nihil modi iusto ad aut.
        <br>At sequi voluptas qui. Porro quia iusto omnis quo. Et culpa similique aut amet non accusamus.
        <br><br>Velit et quo. Quod mollitia rerum enim autem qui omnis sunt quis. Ut eum in exercitationem non ut. Natus nemo laborum rerum voluptas inventore. Architecto atque excepturi est sapiente corporis alias consequatur et perspiciatis. Ut culpa vel.
    </p>
    <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
     </ol>

     <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

     <h3>Header Level 3</h3>

     <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
     </ul>

     <form action="#" method="post">
        <div>
             <label for="name">Text Input:</label>
             <input type="text" name="name" id="name" value="" tabindex="1" />
        </div>

        <div>
             <h4>Radio Button Choice</h4>

             <label for="radio-choice-1">Choice 1</label>
             <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />

         <label for="radio-choice-2">Choice 2</label>
             <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />
        </div>

      <div>
        <label for="select-choice">Select Dropdown Choice:</label>
        <select name="select-choice" id="select-choice">
          <option value="Choice 1">Choice 1</option>
          <option value="Choice 2">Choice 2</option>
          <option value="Choice 3">Choice 3</option>
        </select>
      </div>

      <div>
        <label for="textarea">Textarea:</label>
        <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
      </div>

      <div>
          <label for="checkbox">Checkbox:</label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        </div>

      <div>
          <input type="submit" value="Submit" />
        </div>
    </form>

    <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

      <table class="data">
        <tr>
          <th>Entry Header 1</th>
          <th>Entry Header 2</th>
          <th>Entry Header 3</th>
          <th>Entry Header 4</th>
        </tr>
        <tr>
          <td>Entry First Line 1</td>
          <td>Entry First Line 2</td>
          <td>Entry First Line 3</td>
          <td>Entry First Line 4</td>
        </tr>
        <tr>
          <td>Entry Line 1</td>
          <td>Entry Line 2</td>
          <td>Entry Line 3</td>
          <td>Entry Line 4</td>
        </tr>
        <tr>
          <td>Entry Last Line 1</td>
          <td>Entry Last Line 2</td>
          <td>Entry Last Line 3</td>
          <td>Entry Last Line 4</td>
        </tr>
      </table>
      

      <dl>
        <dt>Definition list</dt>
        <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
     commodo consequat.</dd>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
     commodo consequat.</dd>
     </dl>

     <pre><code>
     #header h1 a {
       display: block;
       width: 300px;
       height: 80px;
     }
     </code></pre>
</div>
<div class="flow content-grid">
  <h1>First title</h1>
  <h2>Second title</h2>
  <img src="https://unsplash.it/1600/400" alt="">
  <p>A short text.</p>
  <p>Sunt suscipit <b>exercitationem</b> qui earum <em>exercitationem</em> <i>dolor</i>. Mollitia provident hic vel aut.</p>
  <p>Autem et dolore nostrum cumque quis sit quos voluptatibus. Quis excepturi nulla dolore. Sapiente neque qui ut atque ab sequi aperiam cum. Qui quasi quisquam porro molestiae dolorum perspiciatis sunt necessitatibus harum. Aut tempore perspiciatis non aspernatur quis error reprehenderit velit distinctio. Rerum nihil modi iusto ad aut.
      <br>At sequi voluptas qui. Porro quia iusto omnis quo. Et culpa similique aut amet non accusamus.
      <br><br>Velit et quo. Quod mollitia rerum enim autem qui omnis sunt quis. Ut eum in exercitationem non ut. Natus nemo laborum rerum voluptas inventore. Architecto atque excepturi est sapiente corporis alias consequatur et perspiciatis. Ut culpa vel.
  </p>
  <img class="full-width" src="https://unsplash.it/1600/400" alt="">
  <ol>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
   </ol>
   <div class="breakout">
    <h2>Second title</h2>
  <p>A short text.</p>
  <p>Sunt suscipit <b>exercitationem</b> qui earum <em>exercitationem</em> <i>dolor</i>. Mollitia provident hic vel aut.</p>
  <p>Autem et dolore nostrum cumque quis sit quos voluptatibus. Quis excepturi nulla dolore. Sapiente neque qui ut atque ab sequi aperiam cum. Qui quasi quisquam porro molestiae dolorum perspiciatis sunt necessitatibus harum. Aut tempore perspiciatis non aspernatur quis error reprehenderit velit distinctio. Rerum nihil modi iusto ad aut.
      <br>At sequi voluptas qui. Porro quia iusto omnis quo. Et culpa similique aut amet non accusamus.
      <br><br>Velit et quo. Quod mollitia rerum enim autem qui omnis sunt quis. Ut eum in exercitationem non ut. Natus nemo laborum rerum voluptas inventore. Architecto atque excepturi est sapiente corporis alias consequatur et perspiciatis. Ut culpa vel.
  </p>
   </div>
   <h2>Second title</h2>
   <p>A short text.</p>
   <p>Sunt suscipit <b>exercitationem</b> qui earum <em>exercitationem</em> <i>dolor</i>. Mollitia provident hic vel aut.</p>
   <p>Autem et dolore nostrum cumque quis sit quos voluptatibus. Quis excepturi nulla dolore. Sapiente neque qui ut atque ab sequi aperiam cum. Qui quasi quisquam porro molestiae dolorum perspiciatis sunt necessitatibus harum. Aut tempore perspiciatis non aspernatur quis error reprehenderit velit distinctio. Rerum nihil modi iusto ad aut.
       <br>At sequi voluptas qui. Porro quia iusto omnis quo. Et culpa similique aut amet non accusamus.
       <br><br>Velit et quo. Quod mollitia rerum enim autem qui omnis sunt quis. Ut eum in exercitationem non ut. Natus nemo laborum rerum voluptas inventore. Architecto atque excepturi est sapiente corporis alias consequatur et perspiciatis. Ut culpa vel.
   </p>
   <section class="full-width bg-primary section-padding flow">
    <h2>Second title</h2>
    <p>A short text.</p>
    <p>Sunt suscipit <b>exercitationem</b> qui earum <em>exercitationem</em> <i>dolor</i>. Mollitia provident hic vel aut.</p>
    <p>Autem et dolore nostrum cumque quis sit quos voluptatibus. Quis excepturi nulla dolore. Sapiente neque qui ut atque ab sequi aperiam cum. Qui quasi quisquam porro molestiae dolorum perspiciatis sunt necessitatibus harum. Aut tempore perspiciatis non aspernatur quis error reprehenderit velit distinctio. Rerum nihil modi iusto ad aut.
        <br>At sequi voluptas qui. Porro quia iusto omnis quo. Et culpa similique aut amet non accusamus.
        <br><br>Velit et quo. Quod mollitia rerum enim autem qui omnis sunt quis. Ut eum in exercitationem non ut. Natus nemo laborum rerum voluptas inventore. Architecto atque excepturi est sapiente corporis alias consequatur et perspiciatis. Ut culpa vel.
    </p>
   </section>
   <p>A short text.</p>

   <p>Sunt suscipit <b>exercitationem</b> qui earum <em>exercitationem</em> <i>dolor</i>. Mollitia provident hic vel aut.</p>
   <p>Autem et dolore nostrum cumque quis sit quos voluptatibus. Quis excepturi nulla dolore. Sapiente neque qui ut atque ab sequi aperiam cum. Qui quasi quisquam porro molestiae dolorum perspiciatis sunt necessitatibus harum. Aut tempore perspiciatis non aspernatur quis error reprehenderit velit distinctio. Rerum nihil modi iusto ad aut.
       <br>At sequi voluptas qui. Porro quia iusto omnis quo. Et culpa similique aut amet non accusamus.
       <br><br>Velit et quo. Quod mollitia rerum enim autem qui omnis sunt quis. Ut eum in exercitationem non ut. Natus nemo laborum rerum voluptas inventore. Architecto atque excepturi est sapiente corporis alias consequatur et perspiciatis. Ut culpa vel.
   </p>
  </div>
		<div>
			
		</div>`,
			published: true,
		},
		{
			id: 2,
			authorId: 1,
			alias: 'about',
			title: 'About',
			body: '<h1>About body</h1>',
			published: true,
		},
		{
			id: 3,
			authorId: 2,
			alias: 'not-public',
			title: 'Not public content example',
			body: '<h1>Not public body</h1>',
			published: false,
		},
		{
			id: 4,
			authorId: 1,
			alias: 'contact',
			title: 'Contact',
			body: '<h1>Contact us</h1><p>mail</p>',
			published: true,
		},
		
	])

	await db.insert(Config).values([
		{
			id: 1,
			name: 'Site',
			email: 'info@site.com',
		}
	])

  await db.insert(HtmlTemplate).values([
		{
			id: 1,
			name: 'Wrapper',
			content: '<div class="wrapper">Content of the wrapper</div>',
		},
    {
			id: 2,
			name: 'With sidebar',
			content: `
        <div class="with-sidebar">
          <main>
            <p>A short text in the main wrapper</p>
          </main>
          <aside>
            <p>A sidebar</p>
          </aside>
        </div>
      `,
		},
    {
			id: 3,
			name: 'Columns',
			content: `
      <div class="columns">
      <div>
        <p>Text column 1</p>
      </div>
      <div>
        <p>Text</p>
      </div>
      <div>
        <p>Text</p>
      </div>
    </div>
      `,
		},
    {
			id: 4,
			name: 'Content flow (grid)',
			content: `
      <div class="content-grid">
      <p>Content flow Text</p>
    </div>
      `,
		},
    {
			id: 5,
			name: 'Breakout from the flow',
			content: `
      <div class="breakout">
      <p>Content breakout Text</p>
    </div>
      `,
		},
    {
			id: 6,
			name: 'Full width from the flow',
			content: `
      <div class="full-width">
      <p>Content full width 100% Text</p>
    </div>
      `,
		},
    {
			id: 7,
			name: 'Responsive image',
			content: `<picture class="responsive-image">
            <source media="(min-width: 85.375rem)" srcset="https://picsum.photos/400/600">
            <img loading="lazy" class="block-hero-home-doit-item-image" src="https://picsum.photos/200/300" alt="Image alt text">
          </picture>`,
    },
    {
			id: 8,
			name: 'Table',
			content: `<table>
      <caption>
        Front-end web developer course 2021
      </caption>
      <thead>
        <tr>
          <th scope="col">Person</th>
          <th scope="col">Most interest in</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Chris</th>
          <td>HTML tables</td>
          <td>22</td>
        </tr>
        <tr>
          <th scope="row">Dennis</th>
          <td>Web accessibility</td>
          <td>45</td>
        </tr>
        <tr>
          <th scope="row">Sarah</th>
          <td>JavaScript frameworks</td>
          <td>29</td>
        </tr>
        <tr>
          <th scope="row">Karen</th>
          <td>Web performance</td>
          <td>36</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colspan="2">Average age</th>
          <td>33</td>
        </tr>
      </tfoot>
    </table>
    `,
    },
      

	])
	
}
