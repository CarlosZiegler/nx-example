import { act, renderHook } from '@testing-library/react-hooks';
import useLocationMap from './useLocationMap';

describe('useLocationMap', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useLocationMap());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
