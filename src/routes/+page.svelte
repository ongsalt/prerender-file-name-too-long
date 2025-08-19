<script lang="ts">
  import { getLenght } from "$lib/lenght.remote";

  const text = "a".repeat(1000);
  const lenght = getLenght(text);
</script>

<h1>Hi hi~~~</h1>
<p>{text}</p>
<p>{lenght.current}</p>
