<script lang="ts">
    import { enhance, applyAction } from '$app/forms';
    let user_email= ""
    let password = '';
    let errorMessage = '';
    let location = '';
    let thisRegisterForm;
</script>
<h>this is register page</h>

<form bind:this={thisRegisterForm} method="POST" use:enhance action="?/register" >
    <label>
		location
		<input name="location" type="text" bind:value={location} required>
	</label>
	<label>
		Email
		<input name="user_email" type="email" bind:value={user_email} required>
	</label>
	<label>
		Password
		<input name="password" type="password" bind:value={password} required>
	</label>
    {#if errorMessage}
    <p>{errorMessage}</p>
{/if}
    <div class="flex  gap-6">

        
        <button type="submit" class="border px-3 py-1 bg-blue-300 hover:bg-purple-600">Sign Up</button>
        <!-- <button class="border px-3 py-1 bg-blue-300 " on:click={getData}>click me</button> -->
    </div>
</form>

<style>
    form{
        display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 25vh;
    width: 50vw;
    margin: auto;
    gap: 25px;
    }
    label{
        width: 70%;
        margin: auto;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    }
</style>