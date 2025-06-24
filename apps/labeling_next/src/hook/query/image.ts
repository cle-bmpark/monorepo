import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';
import { popupAtom } from '@ui/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const queryKeys = createQueryKeyStore({
  image: {
    folders: ['imageFolders'],
    files: (folderName: string) => [{ folderName }],
    selectedImage: (folderName: string, fileName: string) => [{ folderName, fileName }],
  },
});

export interface ImageFolderType {
  name: string;
  image_count: number;
  thumbnail_path: string | null;
  labeled_count: number;
}

enum MarkerLabelType {
  positive = 1,
  negative = 0,
}

interface ImageMarkerType {
  x: number;
  y: number;
  label: MarkerLabelType;
}

export interface ImageFileObjectType {
  object_id: number;
  markers: ImageMarkerType[];
}

export interface ImageFileType {
  name: string;
  url: string;
  objects: ImageFileObjectType[];
}

export interface SelectImageType {
  image_folder: string;
  image_name: string;
  height: number;
  width: number;
  objects: ImageFileObjectType[];
  maskimage: string | null;
}

export const useImageFoldersQuery = () => {
  const [, setPopup] = useAtom(popupAtom);

  const { error, data, refetch } = useQuery<ImageFolderType[]>({
    queryKey: [queryKeys.image.folders],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/image_folders`).then((res) => res.json()),
  });

  useEffect(() => {
    if (error) {
      setPopup({
        visible: true,
        title: 'Error',
        content: error?.message ?? 'Can not refetch Image Folders',
        confirmLabel: 'Refetch',
        cancelLabel: 'Cancel',
        onConfirm: () => {
          void refetch();
        },
        onCancel: () => {
          return;
        },
      });
    }
  }, [error, refetch, setPopup]);

  return { data };
};

export const useImagesQuery = (folderName?: string) => {
  const [, setPopup] = useAtom(popupAtom);
  const { error, refetch, data } = useQuery<ImageFileType[]>({
    queryKey: [queryKeys.image.files(folderName ?? 'undefined')],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/image_folders/${folderName}`).then((res) =>
        res.json(),
      ),
    enabled: !!folderName,
  });

  useEffect(() => {
    if (error) {
      setPopup({
        visible: true,
        title: 'Error',
        content: error?.message ?? 'Can not refetch Image Folders',
        confirmLabel: 'Refetch',
        cancelLabel: 'Cancel',
        onConfirm: () => {
          void refetch();
        },
        onCancel: () => {
          return;
        },
      });
    }
  }, [error, refetch, setPopup]);

  return { data };
};

export const useSelectedImageQuery = (folderName?: string, fileName?: string) => {
  const [, setPopup] = useAtom(popupAtom);
  const { error, refetch, data } = useQuery<SelectImageType>({
    queryKey: [queryKeys.image.selectedImage(folderName ?? 'undefined', fileName ?? 'undefined')],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/select_image/${folderName}/${fileName}`, {
        method: 'POST',
      }).then((res) => res.json()),
    enabled: !!folderName || !!fileName,
  });

  useEffect(() => {
    if (error) {
      setPopup({
        visible: true,
        title: 'Error',
        content: error?.message ?? 'Can not refetch Image Folders',
        confirmLabel: 'Refetch',
        cancelLabel: 'Cancel',
        onConfirm: () => {
          void refetch();
        },
        onCancel: () => {
          return;
        },
      });
    }
  }, [error, refetch, setPopup]);

  return { data };
};
