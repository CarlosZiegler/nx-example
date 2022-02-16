import { act, renderHook } from '@testing-library/react-hooks';
import useUser from './useUser';

describe('useUser', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useUser());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
