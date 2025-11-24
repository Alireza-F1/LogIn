<script setup>
import InputEmailSVG from '@/components/svg/InputEmailSVG.vue'
import InputPassSVG from '@/components/svg/InputPassSVG.vue'
import InputPhoneSVG from '@/components/svg/InputPhoneSVG.vue'

const props = defineProps({
  status: {
    type: String,
    required: true,
    default: '',
  },
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const inputFeatures = {
  phone: {
    type: 'tel',
    class: 'tabular-nums',
    placeholder: 'Your Phone Number',
    pattern: '[0-9]*',
    minlength: '11',
    maxlength: '11',
    title: 'Must be 11 digits',
    hint: 'Must be 11 digits',
  },
  email: {
    type: 'email',
    placeholder: 'youremail@gmail.com',
    pattern:
      '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)+$',
    hint: 'Enter valid email address',
  },
  password: {
    type: 'password',
    placeholder: 'Password',
    minlength: '8',
    pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
    title: 'Must be more than 8 characters, including number, lowercase letter, uppercase letter',
    hint: 'Must be more than 8 characters, including number, lowercase letter, uppercase letter',
  },
}

const features = inputFeatures[props.status]
</script>

<template>
  <div class="mb-2.5">
    <label class="input validator sm:h-[55px] lg:h-10">
      <InputEmailSVG v-if="props.status === 'email'" />
      <InputPassSVG v-if="props.status === 'password'" />
      <InputPhoneSVG v-if="props.status === 'phone'" />

      <input
        v-bind="features"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        required
      />
    </label>

    <p class="validator-hint hidden">{{ features.hint }}</p>
  </div>
</template>
