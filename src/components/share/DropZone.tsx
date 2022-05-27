import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

interface DropZoneProps {
  // eslint-disable-next-line no-unused-vars
  onFileUploaded: (file: File) => void;
  selectedFile: File | undefined;
}

const Dropzone = ({ onFileUploaded, selectedFile }: DropZoneProps) => {
  const [selectedFIleUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
  });

  return (
    <div
      className="flex h-96 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-grey-300 bg-primary-100 outline-none"
      {...getRootProps()}
    >
      <input {...getInputProps()} accept="image/*" />
      {selectedFile && selectedFIleUrl ? (
        <img
          className="h-full w-full object-cover"
          src={selectedFIleUrl}
          alt="upload"
        />
      ) : (
        <p className="flex h-[calc(100%-6rem)] w-[calc(100%-6rem)] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary-500 text-center text-grey-500">
          <FiUpload className="mb-3 h-10 w-10 text-primary-500" />
          Arrastre o haga click para cargar su imagen
        </p>
      )}
    </div>
  );
};

export default Dropzone;
