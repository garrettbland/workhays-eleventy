<script>
    import Layout from '../components/Layout.svelte'
    let name = 'garrett'
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<Layout>
    <h1 class="text-5xl font-bold text-indigo-600 mb-3">
        Admin {name}
    </h1>
</Layout>
