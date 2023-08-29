import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface RepoOwnerNameStore {
  repoOwnerName: string;
  changeRepoOwnerName: (newRepoOwnerName: string) => void;
}

export const useRepoOwnerNameStore = create<RepoOwnerNameStore>()(
  devtools(set => ({
    repoOwnerName: '',
    changeRepoOwnerName: newRepoOwnerName => set({ repoOwnerName: newRepoOwnerName }),
  })),
);

interface RepoNameStore {
  repoName: string;
  changeRepoName: (newRepoName: string) => void;
}

export const useRepoNameStore = create<RepoNameStore>()(
  devtools(set => ({
    repoName: '',
    changeRepoName: newRepoName => set({ repoName: newRepoName }),
  })),
);

interface IsSearchModeStore {
  isSearchMode: boolean;
  toggleIsSearchMode: () => void;
}

export const useIsSearchModeStore = create<IsSearchModeStore>()(
  devtools(set => ({
    isSearchMode: true,
    toggleIsSearchMode: () => set(state => ({ isSearchMode: !state.isSearchMode })),
  })),
);
