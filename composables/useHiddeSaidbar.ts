export const useHiddeSaidbar = () => {
  const saidbarState = useState('hidden', () => true)

  const Hide = () => {
    saidbarState.value = true
  }

  const Show = () => {
    saidbarState.value = false
  }

  return {saidbarState, Hide, Show}
}