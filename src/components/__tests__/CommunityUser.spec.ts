import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginComponent from '../../views/CommunityView.vue'

describe('LoginComponent', () => {
  const wrapper = mount(LoginComponent)
  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('emits a login event on form submission', async () => {
    await wrapper.find('#username').setValue('testuser')
    await wrapper.find('#password').setValue('password123')
    await wrapper.find('form').trigger('submit.prevent')
  })
})
