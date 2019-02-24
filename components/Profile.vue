<template>  
  <div>
    <h2>プロフィール</h2>
    <div class="userInfo">
      <img src="https://1.bp.blogspot.com/-ghzD3SVixmw/XAY52fGXyOI/AAAAAAABQfg/4HGKsn8dHWsByoHkTP5W_helqhAKVWeUgCLcBGAs/s800/game_jikkyou_man.png" width="100" height="100">
      <h1 class="userName">{{ userName }}</h1>
    </div>
    <div class="userInfo2">
      <a href="https://twitter.com/watsuyo_2">Twitter</a>
      <a href="https://github.com/watsuyo/">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      userName: "わつよかっけー",
      twitter: "https://twitter.com/watsuyo_2",
      github: "https://github.com/watsuyo/"
    }
  }
}
</script>

<style>
  .userInfo {
    display: inline-flex;
  }
  .userInfo2 {
    display: flex;
  }
  .userName {

  }

</style>
