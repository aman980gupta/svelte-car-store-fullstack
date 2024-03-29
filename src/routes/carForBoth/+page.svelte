<script type="ts">
  import {tokenFromStore} from "../../lib/store/store"
   export let data;
   const movies = data.movies
  // $:User = data.tokeValue
  //  $:{
  //   const newToken = data?.tokeValue
  //   tokenFromStore.set(newToken)
  //  }
   //console.log(data)
  //  let products = data.products
  const handleClick = () =>{
    let newToken;
    console.log(data)
  }
</script>
<section class="h-full w-full">
  <h2>this is page for cars</h2>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    {#each movies as movie}
    <article class="group">
      <img
        alt=""
        src={movie.poster}
        class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />
    
      <div class="p-4">
        <h3 class="text-lg font-medium text-gray-900">{movie.title}</h3>
        <!-- <a href="#">
        </a> -->
    
        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{movie.fullplot} </p>
      </div>
    </article>
    {/each}

    <!-- <div class="h-32 rounded-lg bg-gray-200"></div> -->
  </div>
   
 
    
</section>