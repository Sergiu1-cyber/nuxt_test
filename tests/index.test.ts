import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Home from "../pages/index.vue"

describe('componentul e vizibil', () => {
  test('componentul e pregatit', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toMatch(/home page/i)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

