<script lang="ts">
  import { getLength } from "$lib/length.remote";

  const text = "a".repeat(1000);
  const length = getLength(text);
</script>

<h1>Hi hi~~~</h1>
<p>{text}</p>
<p>{length.current}</p>
