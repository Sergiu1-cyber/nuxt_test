import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import About from '../pages/about.vue'
import {useTest} from '../composables/useTest'

describe('componentul e vizibil', () => {
  test('componentul e pregatit', () => {
    const wrapper = mount(About)
    expect(wrapper.text()).toMatch(/about page/i)
    expect(wrapper.html()).toMatchSnapshot()
  })
})