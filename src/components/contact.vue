<template>
  <div class="contact">
    <h1 class="mb-4 text-primary">{{ title }}</h1>
    <form @submit.prevent>
      <div class="mb-3">
        <label class="form-label">Full Name</label>
        <input type="text" class="form-control" placeholder="Your Name">
      </div>
      <div class="mb-3">
        <label class="form-label">Email Address</label>
        <input type="email" class="form-control" placeholder="student@university.edu">
      </div>
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      title: 'Contact Us (Finals Required 1)'
    }
  }
}
</script>