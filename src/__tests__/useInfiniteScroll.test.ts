import { renderHook } from '@testing-library/react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

describe('useInfiniteScroll', () => {
  let mockIntersectionObserver: jest.Mock;

  beforeEach(() => {
    mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    });
    window.IntersectionObserver = mockIntersectionObserver as any;
  });

  it('creates IntersectionObserver on mount', () => {
    const onLoadMore = jest.fn();
    renderHook(() =>
      useInfiniteScroll({
        onLoadMore,
        hasMore: true,
        isLoading: false,
      })
    );

    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('returns a ref object', () => {
    const onLoadMore = jest.fn();
    const { result } = renderHook(() =>
      useInfiniteScroll({
        onLoadMore,
        hasMore: true,
        isLoading: false,
      })
    );

    expect(result.current).toHaveProperty('current');
  });

  it('uses custom rootMargin and threshold', () => {
    const onLoadMore = jest.fn();
    renderHook(() =>
      useInfiniteScroll({
        onLoadMore,
        hasMore: true,
        isLoading: false,
        rootMargin: '200px',
        threshold: 0.5,
      })
    );

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        rootMargin: '200px',
        threshold: 0.5,
      })
    );
  });
});
