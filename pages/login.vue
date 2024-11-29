<script setup lang="ts">

  const email = ref('');
  const password = ref('');

  const message = ref('');
  const status = ref(false);
  const router = useRouter();

  const supabase = useSupabaseClient();

  const handleSubmit = async (e: Event) => {
      console.log('email', email.value);
      console.log('password', password.value);
      e.preventDefault();

      if (email.value === '' || password.value === '') {
          status.value = false;
          message.value = 'Please fill in all fields';
          return;
      }

      try{
          const { error } = await supabase.auth.signInWithPassword({
              email: email.value,
              password: password.value,
          });

          if (error) {
              throw error;
          }

          message.value = 'Logged successful';
          status.value = true;

          //redirect to dashboard page
          await new Promise(resolve => setTimeout(resolve, 2000))
          router.push('/backend/dashboard');
      }  
      catch (error: unknown) {
          if (error instanceof Error) {
              //supabase error
              status.value = false;
              message.value = error.message;
          }
          else {
              //other error
              status.value = false;
              message.value = 'An error occurred';
          }
      }

  };
  // ไว้กำหนด Meta ของหน้าเว็บ เช่น title, description, keyword รวมทั้ง layout ที่ใช้
  definePageMeta({
      layout: 'auth',
  })

  useHead({
      title: 'Login',
      meta: [
      { 
          name: 'keywords', 
          content: 'Login, Nuxt 3, Backend'
      },
      {
          name: 'Description',
          content: 'Login Nuxt 3,  IT Genius Engineering'
      }
      ]
  })

</script>

<template>
    <div class="bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center">
      <div class="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure class="lg:w-1/2">
          <img src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="Random image" class="object-cover w-full h-full" />
        </figure>
        <div class="card-body lg:w-1/2">
          <h2 class="card-title text-2xl font-bold mb-6">Login</h2>
  
          <p v-if="message" :class="status ? 'bg-success': 'bg-error'" class="p-3 rounded-lg text-white">{{ message }}</p>

          <!-- ฟอร์มเข้าสู่ระบบด้วยอีเมล -->
          <form @submit.prevent="handleSubmit">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <input v-model="email" type="email" class="grow" placeholder="email@example.com" />
              </label>
            </div>
            <div class="form-control mt-4">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <input v-model="password" type="password" class="grow" placeholder="Enter password" />
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary w-full">Login with Email</button>
            </div>
          </form>
  
          <!-- Divider สำหรับแบ่งส่วน -->
          <div class="divider">OR</div>
  
          <!-- ฟอร์มเข้าสู่ระบบด้วยเบอร์โทรศัพท์ -->
          <form>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <label class="input input-bordered flex items-center gap-2">
                <input type="tel" class="grow" placeholder="+1234567890" />
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary w-full">Login with Phone</button>
            </div>
          </form>
  
          <div class="text-center mt-4">
            <p>Don't have an account?</p>
            <NuxtLink to="/register" class="link link-primary">Sign up now</NuxtLink>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>