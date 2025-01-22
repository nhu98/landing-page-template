'use client';
import React, {useState} from 'react';
import {useTranslations} from 'next-intl';
import toast, {Toaster} from 'react-hot-toast';
import Image from 'next/image';

export interface FormData {
  fullName: string;
  email: string;
  address: string;
  phone: string;
  service: string;
  note: string;
}

const EmailSubmit = () => {
  const t = useTranslations('HomePage');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    service: '',
    note: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    service: '',
    note: '',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Hàm validate
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    const phoneRegex = /^(0|\+84)[1-9][0-9]{8}$/; // Số điện thoại Việt Nam
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email cơ bản

    if (!formData.fullName) newErrors.fullName = 'Họ và tên là bắt buộc';
    if (!formData.email) newErrors.email = 'Email là bắt buộc';
    else if (!emailRegex.test(formData.email))
      newErrors.email = 'Email không hợp lệ';

    if (!formData.phone) newErrors.phone = 'Số điện thoại là bắt buộc';
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = 'Số điện thoại không hợp lệ';

    if (!formData.service) newErrors.service = 'Vui lòng chọn dịch vụ';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Xử lý submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      toast.loading('Đang xử lý...', {id: 'loading'});
      try {
        const res = await fetch('/api/forms/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
          toast.success(
            'Cảm ơn bạn đã gửi thông tin, chúng tôi sẽ liên hệ sớm nhất!',
          );

          setSuccessMessage(
            'Cảm ơn bạn đã gửi thông tin chúng tôi đã ghi nhận và liên hệ cho bạn sớm nhất!',
          );

          setFormData({
            fullName: '',
            email: '',
            address: '',
            phone: '',
            service: '',
            note: '',
          });
        } else {
          console.log('Error:', JSON.stringify(data.error.error.message));
          toast.error('Có lỗi xảy ra, vui lòng thử lại.');
        }
      } catch (error) {
        toast.error('Lỗi mạng hoặc server, vui lòng thử lại sau.');
        console.error('Error:', error);
      } finally {
        setLoading(false);
        toast.dismiss('loading');
      }
    } else {
      toast.error('Vui lòng kiểm tra thông tin và thử lại.');
      setSuccessMessage('');
    }
  };

  return (
    <section
      id="address"
      className="font-inter border-b-[2px] px-4 py-4 md:px-40 md:py-10 scroll-mt-[calc(150px)]">
      <div className="flex flex-col items-center text-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col">
            <h2 className=" font-bold text-blue-600 mx-auto text-xl mb-6 md:text-5xl md:mb-8">
              {t('investment')}
            </h2>
            <p className="text-blue-500 text-base font-normal mb-[32px]">
              {t('welcomeInvestment')}
            </p>
          </div>

          <div className="md:grid md:grid-cols-2 gap-8 justify-center w-full ">
            {/* Phần địa chỉ */}
            <div className="grid content-center space-y-8">
              {/* Địa chỉ */}
              <div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 p-1 bg-blue-200 rounded-full">
                    <Image
                      src={'/icons/location.png'}
                      alt={'location'}
                      width={64}
                      height={64}
                    />
                  </div>
                  <h2 className="text-2xl font-bold">ĐỊA CHỈ</h2>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <p>Thành phố Tuy Hoà, Phú Yên, Việt Nam</p>
                </div>
              </div>

              {/* Hotline */}
              <div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 p-2 bg-blue-200 rounded-full">
                    <Image
                      src={'/icons/blue-phone.png'}
                      alt={'location'}
                      width={64}
                      height={64}
                    />
                  </div>
                  <h2 className="text-2xl font-bold">HOTLINE</h2>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <p>091 1910 210</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 p-2 bg-blue-200 rounded-full">
                    <Image
                      src={'/icons/mail.png'}
                      alt={'location'}
                      width={64}
                      height={64}
                    />
                  </div>
                  <h2 className="text-2xl font-bold">E-MAIL</h2>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <p>huynhquocnhu@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Phần form */}
            <div className="flex justify-end w-full">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
                <h2 className="text-2xl font-bold mb-6">Đăng ký dịch vụ</h2>

                {successMessage && (
                  <p className="text-green-500 mb-6">{successMessage}</p>
                )}

                {/* Họ và Tên */}
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="flex flex-row mr-2 text-sm font-medium text-gray-700">
                    Họ và Tên <p className="text-red-500 ml-1"> (*) </p>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Nhập họ và tên"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                      errors.fullName ? 'border-red-500' : ''
                    }`}
                    value={formData.fullName}
                    onChange={e => {
                      setFormData({...formData, fullName: e.target.value});
                      setErrors({
                        ...errors,
                        fullName: '',
                      });
                    }}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="flex flex-row text-sm font-medium text-gray-700">
                    Email <p className="text-red-500 ml-1"> (*) </p>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Nhập email"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    value={formData.email}
                    onChange={e => {
                      setFormData({...formData, email: e.target.value});

                      setErrors({
                        ...errors,
                        email: '',
                      });
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Địa chỉ */}
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="flex flex-row text-sm font-medium text-gray-700">
                    Địa chỉ
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    autoComplete="address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    value={formData.address}
                    onChange={e =>
                      setFormData({...formData, address: e.target.value})
                    }
                  />
                </div>

                {/* Số điện thoại */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="flex flex-row text-sm font-medium text-gray-700">
                    Số điện thoại <p className="text-red-500 ml-1"> (*) </p>
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    autoComplete="tel"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                    value={formData.phone}
                    onChange={e => {
                      setFormData({...formData, phone: e.target.value});
                      setErrors({
                        ...errors,
                        phone: '',
                      });
                    }}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Dịch vụ */}
                <div className="mb-4">
                  <label
                    htmlFor="service"
                    className="flex flex-row text-sm font-medium text-gray-700">
                    Dịch vụ <p className="text-red-500 ml-1"> (*) </p>
                  </label>
                  <select
                    id="service"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                      errors.service ? 'border-red-500' : ''
                    }`}
                    value={formData.service}
                    onChange={e => {
                      setFormData({...formData, service: e.target.value});
                      setErrors({
                        ...errors,
                        service: '',
                      });
                    }}>
                    <option value="">-- Chọn dịch vụ --</option>
                    <option value="Váy cưới">Váy cưới</option>
                    <option value="Chụp ảnh cưới">Chụp ảnh cưới</option>
                    <option value="Trọn gói">Trọn gói</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Ghi chú */}
                <div className="mb-4">
                  <label
                    htmlFor="note"
                    className="flex flex-row text-sm font-medium text-gray-700">
                    Ghi chú
                  </label>
                  <textarea
                    id="note"
                    placeholder="Nhập ghi chú"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    value={formData.note}
                    onChange={e =>
                      setFormData({...formData, note: e.target.value})
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  disabled={loading}>
                  {loading ? (
                    <>
                      <div
                        className="inline-block h-4 w-4 mr-2 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span className="text-white !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                      </div>
                      {'Updating...'}
                    </>
                  ) : (
                    'Update Form'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default EmailSubmit;
