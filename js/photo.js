const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';
const PREVIEW_SIZE = 70;

const avatarUploader = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const housingPhotoUploader = document.querySelector('.ad-form__upload input[type=file]');
const housingPhotoContainer = document.querySelector('.ad-form__photo');
const housingPhotoPreview = document.createElement('img');

const handleFiles = (fileChooser, preview) => {
  return (evt) => {
    evt.preventDefault();
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });
    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  };
};

const initPhotoUploaders = () => {
  avatarUploader.addEventListener('change', handleFiles(avatarUploader, avatarPreview));
  housingPhotoUploader.addEventListener('change', handleFiles(housingPhotoUploader, housingPhotoPreview));
  housingPhotoPreview.height = PREVIEW_SIZE;
  housingPhotoPreview.width = PREVIEW_SIZE;
  housingPhotoContainer.append(housingPhotoPreview);
};

const clearPreview = () => {
  avatarPreview.src = DEFAULT_AVATAR_SRC;
  housingPhotoPreview.src = '';
}

export { initPhotoUploaders, clearPreview }
