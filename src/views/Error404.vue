<template>
    <div>
        <div class="my-4 text-center">
            <h1 class="display-1">Oops!</h1>
        </div>
        <div class="alert alert-danger text-center">
            Something went wrong or this page cannot be found
            <p v-if="message" class="text-start">
                <b>Error:</b> <pre>{{ message }}</pre>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Error404',
    props: [
        'message',
    ]
}
</script>
