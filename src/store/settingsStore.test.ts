import {
  DEFAULT_SETTINGS,
  resolveReducedMotion,
  resolveTheme,
  useSettingsStore,
} from './settingsStore';
import { localRepository } from './repository';

describe('settingsStore', () => {
  beforeEach(() => useSettingsStore.setState({ ...DEFAULT_SETTINGS }));

  it('updates and persists settings', () => {
    useSettingsStore.getState().set({ theme: 'dark', ttsRate: 0.7 });
    expect(useSettingsStore.getState()).toMatchObject({
      theme: 'dark',
      ttsRate: 0.7,
      sounds: true,
    });
    expect(JSON.parse(localStorage.getItem('lingoat.settings')!).state.theme).toBe('dark');
  });

  it('defaults the daily goal to 50 XP and persists changes', () => {
    expect(useSettingsStore.getState().dailyGoal).toBe(50);
    useSettingsStore.getState().set({ dailyGoal: 100 });
    expect(JSON.parse(localStorage.getItem('lingoat.settings')!).state.dailyGoal).toBe(100);
  });

  it('reads sentences aloud by default and persists the choice', () => {
    expect(useSettingsStore.getState().speakSentences).toBe(true);
    useSettingsStore.getState().set({ speakSentences: false });
    expect(JSON.parse(localStorage.getItem('lingoat.settings')!).state.speakSentences).toBe(false);
  });

  it('resolves theme and motion', () => {
    expect(resolveTheme('system', true)).toBe('dark');
    expect(resolveTheme('system', false)).toBe('light');
    expect(resolveTheme('light', true)).toBe('light');
    expect(resolveReducedMotion('system', true)).toBe(true);
    expect(resolveReducedMotion('full', true)).toBe(false);
    expect(resolveReducedMotion('reduced', false)).toBe(true);
  });
});

describe('localRepository', () => {
  it('round-trips values', () => {
    localRepository.setItem('k', 'v');
    expect(localRepository.getItem('k')).toBe('v');
    localRepository.removeItem('k');
    expect(localRepository.getItem('k')).toBeNull();
  });

  it('reads and clears keys written before the lingoat rename', () => {
    localStorage.setItem('spielplatz.progress', '{"old":1}');
    expect(localRepository.getItem('lingoat.progress')).toBe('{"old":1}');
    expect(localRepository.getItem('other.key')).toBeNull();
    localRepository.setItem('lingoat.progress', '{"new":1}');
    expect(localStorage.getItem('spielplatz.progress')).toBeNull();
    expect(localRepository.getItem('lingoat.progress')).toBe('{"new":1}');
    localStorage.setItem('spielplatz.progress', '{"old":1}');
    localRepository.removeItem('lingoat.progress');
    expect(localRepository.getItem('lingoat.progress')).toBeNull();
  });

  it('never throws when storage is blocked', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const spy2 = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const spy3 = vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(localRepository.getItem('k')).toBeNull();
    expect(() => localRepository.setItem('k', 'v')).not.toThrow();
    expect(() => localRepository.removeItem('k')).not.toThrow();
    spy.mockRestore();
    spy2.mockRestore();
    spy3.mockRestore();
  });
});
